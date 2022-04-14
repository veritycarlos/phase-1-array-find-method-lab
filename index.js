function superbowlWin(array) {
    const win = array.find(bowl => bowl.result === 'W')
   return  win ?  win.year :  win
}