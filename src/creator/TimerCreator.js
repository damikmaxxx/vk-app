import { firebaseAPI,DB_TIMER_START, DB_TIMER_TIME } from '../api/api';

async function TimerCreator({user,name,time,repeat,consoleView},func) {
    let _time = time
    let oneTimer = true
    let entry = null
    let diff = 0
    const GetServerTime =   async () => {
        await firebaseAPI.getServerTime().on('value', function(offset) {
            const offsetVal = offset.val() || 0;
            entry = Date.now() + offsetVal;
        });
    }

    GetServerTime()
    const CreateTimerBD =  async () => {
        _time = time
        await GetServerTime()
        await firebaseAPI.getTimerDB(user.id).then((snapshot) => {
            let val = snapshot.val()
            firebaseAPI.updateTimerDB(user.id,name,DB_TIMER_START,entry) 
            firebaseAPI.updateTimerDB(user.id,name,DB_TIMER_TIME,time)
            TimerFunc()
        }) 
    }
    const TimerFunc = async () => {
            GetServerTime()
            _time = time - diff   
            let timer = setInterval(() => {
                _time -= 1000
                if(consoleView){ console.log("Осталось: "+ _time/1000 + "сек") }    
                if(_time <= 0){
                    func()
                    if (!repeat){
                        clearInterval(timer);
                    }
                    else{
                        diff = 0
                        clearInterval(timer);
                        CreateTimerBD()
                    }
                    
                }
            },1000)
    }    
   
    if (!oneTimer) return
    oneTimer = false

        await firebaseAPI.getTimerDB(user.id).then((snapshot) => { 
            let val = snapshot.val()
            if(!val[name]){
                CreateTimerBD()
                return 
            }  
            
            
            if (val[name].startTimer + val[name].timerTime <= entry){
                func()
                diff = - (val[name].startTimer + val[name].timerTime - entry)
                if (!repeat) return
                while (diff > time){
                    func()
                    diff -= time
                }
                    CreateTimerBD()
            }
            else{
                diff = time - (val[name].startTimer + val[name].timerTime - entry)
                TimerFunc()
            }
        })
    return 
    
}

export default TimerCreator