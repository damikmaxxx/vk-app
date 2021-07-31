
import React, { useState } from 'react';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar,PanelHeaderBack, CardGrid, Card } from '@vkontakte/vkui';
import { Icon24DollarCircleOutline } from '@vkontakte/icons';
import HeaderUp from '../components/Header/HeaderUp';
import { firebaseAPI,DB_TIMER_START, DB_TIMER_TIME } from '../api/api';

async function TimerCreator({user,name,time,repeat},func) {
    let _time = time
    let oneTimer = true
    let entry = null
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
            firebaseAPI.updateTimerDB(user.id,name,DB_TIMER_TIME,_time)
            TimerFunc()
        }) 
    }
    const TimerFunc = async (val = null) => {
        if(val  &&  val.giveGold){
            GetServerTime()
            let diff = val.giveGold.startTimer + val.giveGold.timerTime - entry
            _time = diff   
        }
            let timer = setInterval(() => {
                _time -= 1000
                console.log("Осталось: "+ _time/1000 + "сек")     
                if(_time <= 0){
                    func()
                    if (!repeat){
                        clearInterval(timer);
                    }
                    else{
                        clearInterval(timer);
                        CreateTimerBD(val)
                    }
                    
                }
            },1000)
    }    
   
    if (!oneTimer) return
    oneTimer = false

        await firebaseAPI.getTimerDB(user.id).then((snapshot) => { 
            let val = snapshot.val()
            if(!val.giveGold){
                CreateTimerBD(val)
                return 
            }  
            if (val.giveGold.startTimer + val.giveGold.timerTime <= entry){
                func()
                if (repeat){
                    CreateTimerBD(val)
                }
            }
            else{
                TimerFunc(val)
            }
        })
    return 
    
}

export default TimerCreator