console.log('hello');
showNotes();  //This is for showing all the notes at the beginning of the program


//If users add a note add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click",function (e) {

    let addTxt = document.getElementById("addTxt");

    let notes = localStorage.getItem("notes");

    if(notes== null){
        notesObj=[];
    }
    else{
       notesObj = JSON.parse(notes);

    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value="";
    console.log(notesObj);
    showNotes();
    
})

//This is for showing all the notes.

function showNotes() {

    let notes = localStorage.getItem('notes');
    if (notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach( function(element,index) {

        html +=`<div class=" noteCard mx-2 my-2" style="width: 18rem;">
                   
        <div class="card-body">
          <h5 class="card-title">Note ${index+1}</h5>
          <p class="card-text">${element  }</p>
          <button id ="${index}" onclick="deleteNote(this.id)"  class="btn btn-primary">Delete Note</button>
        </div>
      </div>    `
        
    });

    let notesElm = document.getElementById('notes');
    if(notesObj.length != 0){
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML =` Nothing to show! please add a note from the Add Note`;
    }
    
}

//function to delete notes


function deleteNote(index) {
    console.log("Iam clicked",index);
    
    let notes = localStorage.getItem('notes');
    if (notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }

    notesObj.splice(index,1);
    
    localStorage.setItem('notes',JSON.stringify(notesObj));
    showNotes();
}
 //searching a note 

 let searchTxt = document.getElementById("searchTxt");
 searchTxt.addEventListener("input" , function() {

    let inputVal = searchTxt.value.toLowerCase();
     console.log("inputEvent fired", inputVal);

     let noteCard = document.getElementsByClassName('noteCard');
     Array.from(noteCard).forEach(function(element) {
         let cardTxt = element.getElementsByTagName('p')[0].innerText;
         if(cardTxt.includes(inputVal)){
             element.style.display = "block";
         }
         else{
             element.style.display="none";
         }
        //  console.log(cardTxt);
         
     })

     
 })