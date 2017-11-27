import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    
    state = {options: [],
            selectedOption:undefined};
    
  handleClearSelectedOption =()=>{
      this.setState((prevState)=>({selectedOption:undefined}));
  }
    handleDeleteOptions = () => {
        this.setState(()=>({options:[]})); 
        
    };
    handleDeleteOption = (optionToRemove) => {
        console.log(optionToRemove);
    this.setState((prevState)=>({
     options:prevState.options.filter((option)=>(option !== optionToRemove))   
    }));
    };
    handlePick = () => {
       const randomNum = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState((prevState)=>({selectedOption:option}));
    };
    handleAddOption = (option) => {
        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option) !== -1){
            return 'This option already exists';
        } else {
        console.log(`IndecisionApp> handleAddOption> option : ${option}`);
        this.setState((prevState)=> ({options:prevState.options.concat([option]) }) );                
            }
    };
    
    componentDidMount(){
        try{
            const json = window.localStorage.getItem('options');
            const options = JSON.parse(json);
        if(options){
            this.setState(()=>({options}));
        }
        }catch(e){
            
        }
    }
    
    componentDidUpdate(prevProps,prevState){
        
        if(prevState.options.length !== this.state.options.length){
           const json = JSON.stringify(this.state.options);
            window.localStorage.setItem('options',json);
        }
    }
    componentWillUnmount(){
        console.log(`component will unmount`);
    }
    
   
    
    render(){
        const subTitle = 'Put your life in the hands of computer';
        return(<div>
            <Header subTitle={subTitle}/>
               <div className="container container-color">
            <Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0}/>
               <div className="widget">
                   <Options handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} options={this.state.options}/>
            <AddOption handleAddOption={this.handleAddOption}/>
               </div>
            
        <OptionModal handleClearSelectedOption={this.handleClearSelectedOption}
            selectedOption={this.state.selectedOption}       
        /></div>
               </div>);
        
    }
 }
