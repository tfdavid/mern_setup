import React, { Component } from 'react';
import axios from 'axios';

class ApiTest extends Component{

    getUserData(){
        axios.get('/api/get-user').then(res=>{
            console.log('Response from get-user: ', res);

        }).catch(err=>{console.log('error is: ', err.message)});
    }
    getArticleData(){
        axios.get('/api/get-articles').then(res=>{
            console.log("resp from articles: ", res);
        }).catch(err=>{"error from articles: ",err.message })
    }

    render(){
        return (
            <div>
                <h1>ApiTest</h1>
                <button onClick={this.getUserData}>Get User Info</button>
                <br/>
                <button onClick={this.getArticleData}>Get Article Data</button>
            </div>

        )
    }
}


export default ApiTest;