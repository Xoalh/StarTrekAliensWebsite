//const url = `https://startrek-aliens-alh-api.herokuapp.com`
//Click event
//document.querySelector('button').addEventListener('click', apiRequest)
document.getElementById('getButton').addEventListener('click', apiRequest)

//fetch from Star Trek Aliens API

async function apiRequest (){
    const alienName = document.querySelector('input').value
    try{ 
        const response = await fetch (`https://startrek-aliens-alh-api.herokuapp.com/api/${alienName}`)
        const data = await response.json()
        console.log(data)
        document.getElementById('alienName').innerText = data.speciesName
        document.getElementById('alienWorld').innerText = data.homeworld
        document.getElementById('alienFeatures').innerText = data.features
        document.getElementById('alienFacts').innerText = data.interestingFact
        document.getElementById('alienExamples').innerText = data.notableExamples
        document.getElementById('alienImage').src = data.image
        document.getElementById('alienCaption').innerText = data.speciesName
    }catch (error) {
               console.log(error)
    }
}

