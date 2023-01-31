const submit = document.getElementById("submit");
const myInput = document.getElementById("myInput");
const result = document.getElementById("result");

function capitalize(word){
    let lower = word;
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}

submit.addEventListener("submit",(e)=>{
    e.preventDefault();
    let url = `http://localhost:3000/searchword?entry=${myInput.value}`;
    let r = fetch(url)
    r.then((response)=>{
        return response.json()
    }).then((resp)=>{
        let htmlstr = `<div class="city">
        <div class="city-name">
            <h2>${capitalize(myInput.value)}</h2>
            <sup>${capitalize(resp.results[0].lexicalEntries[0].lexicalCategory.text)}</sup>
            <p style="font-size:1.3em;">${capitalize(resp.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0])}.</p>
            <sup>Example</sup>
            <p style="font-size:1.3em;">${capitalize(resp.results[0].lexicalEntries[0].entries[0].senses[0].examples[0].text)}.</p>
            <hr/>
        </div>
        <div class="city-data">
            <pre>Synonyms   -   ${capitalize(resp.results[0].lexicalEntries[0].entries[0].senses[0].synonyms[0].text)}, ${capitalize(resp.results[0].lexicalEntries[0].entries[0].senses[0].synonyms[1].text)}</pre>
            <hr/>
            <pre>Dialects   -   ${capitalize(resp.results[0].lexicalEntries[0].entries[0].pronunciations[0].dialects[0])}</pre>
        </div>
    </div>`

    result.innerHTML = htmlstr
    myInput.value ="";
        return resp
    })
})
