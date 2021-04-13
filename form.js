class Form {
    constructor(){
        this.input = createInput("")
        this.inst = createElement("h2")
        this.button = createButton("start your journey")
        this.input1 = createInput("")
        this.inst1 = createElement("h3")
        
    }
    display(){
        this.inst.html("name your character")
        this.inst1.html("choose an age")
        this.inst.position (640,100);
        this.inst1.position (690,400);


        this.button.mousePressed (()=>{

        })
    }
}