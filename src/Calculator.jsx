import React,{Component} from 'react';
import './cal.css';

class Calculator extends Component{

    constructor(props){
        super(props);
        this.state = {
            num1:'',
            num2:'',
            result:''
        }
    }

    getnum1 = (e)=>{
        const num=e.target.value;
        this.setState({
            num1:num
        })
    }

    getnum2 = (e)=>{
        const num=e.target.value;
        this.setState({
            num2:num
        })
    }

    add = ()=>{
        const num1 = parseInt(this.state.num1);
        const num2 = parseInt(this.state.num2);
        const result = num1+num2;

        this.setState({
            result:result
        })
    }

    sub = ()=>{
        const num1 = parseInt(this.state.num1);
        const num2 = parseInt(this.state.num2);
        const result = num1-num2;

        this.setState({
            result:result
        })
    }

    mul = ()=>{
        const num1 = parseInt(this.state.num1);
        const num2 = parseInt(this.state.num2);
        const result = num1*num2;

        this.setState({
            result:result
        })
    }

    divide = ()=>{
        const num1 = parseFloat(this.state.num1);
        const num2 = parseFloat(this.state.num2);
        const result = num1/num2;

        this.setState({
            result:result
        })
    }

    perc = ()=>{
        const num1 = parseInt(this.state.num1);
        const num2 = parseInt(this.state.num2);
        const result = num1%num2;

        this.setState({
            result:result
        })
    }

    clear = ()=>{
        this.setState({
            num1:"",
            num2:"",
            result:""
        })
    }
    

    render(){
        return<section className="container">
            <h2 className="text-center ">Calculator</h2> 
            <div className="row">
                <div className="col-sm-12">
                    <input type="number" value={this.state.num1} className="form-control" onChange={this.getnum1} placeholder="Enter First Number"/>
                    <input type="number" value={this.state.num2} className="form-control" onChange={this.getnum2} placeholder="Enter Second Number"/> 
                    <span>Result</span> <span>{this.state.result}</span> <br/>
                </div>
            </div>
            <div>
        <button onClick={this.add} className="btn btn-dark">+</button>
            <button onClick={this.sub} className="btn btn-dark">-</button>
            <button onClick={this.divide} className="btn btn-dark">/</button>
            <button onClick={this.mul} className="btn btn-dark">*</button>
            <button onClick={this.perc} className="btn btn-dark">%</button>
            <button onClick={this.clear} className="btn btn-secondary">clear</button>
        </div>
        </section>
    }
}

/*let aa;

class Calculator extends Component{

    constructor(props){
        super(props);
        this.state = {
            num1:'',
            num2:'',
            operation:'',
            result:''
        }
    }

    getnum = (e)=>{
        aa=e.target.value;
        this.setState({
            num2:aa
        })
    }

    getnum2 = ()=>{
        var num=aa;
        this.setState({
            num1:num
        })
    }

    getAnswer = (e)=>{
        var a = parseInt(this.state.num1);
        var b = parseInt(this.state.num2);
        
        var res = a+b;
            this.setState({
                result:res
            })
    }


    render(){
        return <div>
            <input type="number" value={this.state.result} onChange={this.getnum} placeholder="Enter Number"/> <br/>
            <span>{this.state.num1}</span>
            <br/>
            <span>{this.state.num2}</span>
            <br/>
            <span>{this.state.result}</span><br/>
            <button onClick={this.getnum2}>+</button>
            <button>-</button>
            <button>/</button>
            <button>*</button>
            <button>%</button>
            <button onClick={this.getAnswer}>=</button>


        </div>
    }
}*/



export default Calculator;