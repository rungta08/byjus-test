import React, { Component } from 'react';
import Search from './component/Search';
import Jobs from './component/Jobs';
import Axios from 'axios';


// Main App Component
class App extends Component {
  constructor(props){
    super(props);
    this.state={
        Jobs:[],
        filteredJobs:[]
    };
  }

  // Will Get Data from api as soon as Component gets mounted
  componentDidMount(){
      Axios.get('https://api.myjson.com/bins/kez8a')
      .then((response)=>{
          this.setState({
              Jobs: response.data.jobsfeed
          });
      })
      .catch((error)=>{
          console.log(error);
      });
  }

  //Search handler method to search jobs on the basis of Experience or Location or Skills or Company
  jobSearchHandler=(data)=>{
    //filtering on the basis of Experience
      let filteredJobsExp = this.state.Jobs.filter((job)=>{
        if(data.selectExperience.value==='All Levels'){
          return job;
        }
        else if(data.selectExperience.value==='Entry Level'){
          let min=parseInt(job.experience.split(' ')[0].split('-')[0]);
          if(((min>=0) && (min<1)) || (job.experience.split(' ')[0].split('-')[0]==='Fresher') || (job.experience.split(' ')[0].split('-')[0]==='')){
            return job;
          }
          else{
            return null;
          }
        }
        else if(data.selectExperience.value==='Associate'){
          let min=parseInt(job.experience.split(' ')[0].split('-')[0]);
          if(((min>=1) && (min<4))  || (job.experience.split(' ')[0].split('-')[0]==='')){
            return job;
          }
          else{
            return null;
          }
        }
        else if(data.selectExperience.value==='Mid-Senior'){
          let min=parseInt(job.experience.split(' ')[0].split('-')[0]);
          if(((min>=4) && (min<8))  || (job.experience.split(' ')[0].split('-')[0]==='')){
            return job;
          }
          else{
            return null;
          }
        }
        else if(data.selectExperience.value==='Executive'){
          let min=parseInt(job.experience.split(' ')[0].split('-')[0]);
          if((min>=8)  || (job.experience.split(' ')[0].split('-')[0]==='')){
            return job;
          }
          else{
            return null;
          }
        }
        else{
          return null;
        }

          
      });



      //filtering on the basis of Location
      let filteredJobsLoc = filteredJobsExp.filter((job)=>{
        if(data.selectLocation.value.toLowerCase()==='anywhere in india'){
          return job
        }
        else{
          return (
            job.location.toLowerCase().includes(data.selectLocation.value.toLowerCase().split('/')[1])||
            job.location.toLowerCase().includes(data.selectLocation.value.toLowerCase().split('/')[0])||
            job.location.toLowerCase().includes('anywhere in india')
          )
        }
      });

      //filtering on the basis of Skills or Company
      let filteredJobs = filteredJobsLoc.filter((job)=>{
        return (
          job.skills.toLowerCase().includes(data.skills.value.toLowerCase())||
          job.companyname.toLowerCase().includes(data.skills.value.toLowerCase())
        )
      });

      //setting filtered jobs
      this.setState({
        filteredJobs: filteredJobs
      });
  }

  //handler function to sort jobs on the basis of Location
  handleSortLoc = (e) =>{
    let sortedJobs = this.state.filteredJobs.sort((a,b)=>{
        if(e.target.value==='Asc'){
            if(a.location.toLowerCase() < b.location.toLowerCase() )
                return -1;
            else
                return 0;
        }
        else{
            if(a.location.toLowerCase()  > b.location.toLowerCase() )
                return -1;
            else
                return 0;
        }
    })
    this.setState({
      filteredJobs: sortedJobs
    });

  }

  //handler function to sort jobs on the basis of Experience
  handleSortExp = (e) =>{
    let sortedJobs = this.state.filteredJobs.sort((a,b)=>{
        if(e.target.value==='Asc'){
            if(a.experience.split(' ')[0].split('-')[0]===''){
              return -1;
            }
            else if(b.experience.split(' ')[0].split('-')[0]===''){
              return 1;
            }
            else if(a.experience.split(' ')[0].split('-')[0]==='Fresher'){
              return -1;
            }
            else if(b.experience.split(' ')[0].split('-')[0]==='Fresher'){
              return 1;
            }
            else
              return parseInt(a.experience.split(' ')[0].split('-')[0]) - parseInt(b.experience.split(' ')[0].split('-')[0])
        }
        else{
          if(a.experience.split(' ')[0].split('-')[0]===''){
            return 1;
          }
          else if(b.experience.split(' ')[0].split('-')[0]===''){
            return -1;
          }
          else if(a.experience.split(' ')[0].split('-')[0]==='Fresher'){
            return 1;
          }
          else if(b.experience.split(' ')[0].split('-')[0]==='Fresher'){
            return -1;
          }
          else
            return parseInt(b.experience.split(' ')[0].split('-')[0]) - parseInt(a.experience.split(' ')[0].split('-')[0])
        }
    })
    this.setState({
      filteredJobs: sortedJobs
    });
}



  render() {
    return (
      <div className="App" data-test='AppComponent'>
        <Search searchHandler={this.jobSearchHandler}/>
        <Jobs jobs={this.state.filteredJobs} handleSortL={this.handleSortLoc} handleSortE={this.handleSortExp} />
      </div>
    );
  }
}

export default App;
