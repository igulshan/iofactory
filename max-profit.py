time=int(input())
earning=int(input())

def profit(time,thtr,pub,cpark):
    if time<0:
        return
    if time<4 and time>=0:
        if earning%(thtr*1500+pub*1000+cpark*3000)==0:
            print('T:'+str(thtr)+'P:'+str(pub)+'C:'+str(cpark))
        return
    else:
        profit(time-5,thtr+1,pub,cpark), profit(time-4,thtr,pub+1,cpark),profit(time-10,thtr,pub,cpark+1)
        
profit(time,0,0,0)