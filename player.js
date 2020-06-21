class Player
{
    constructor(){}
    updateQuestion1(Q1,Q2,Q3,name)
    {
        var playerName = "user"+playerCount;
        database.ref(playerName).set({
            'question1':Q1,
            'question2':Q2,
            'question3':Q3,
            'name':name
        })
    }

    getCount()
    {
        database.ref('userCount').on(
            "value",function(data){
                playerCount=data.val();
            }
        )
    }

    updatePlayerCount(count)
    {
        database.ref('/').update({
            userCount:count
        })
    }
}