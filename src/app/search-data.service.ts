export class SearchDataService{
    
    zipcode=''
    breed=''
    shelter=''

    
    setZip(zipcode: string){
        this.zipcode=zipcode;
        localStorage.setItem("zipcode",this.zipcode)
    }

    setBreed(breed : string){
        this.breed = breed;
        localStorage.setItem("breed",this.breed)
    
    }

    setShelter(shelter : string){
        this.shelter = shelter;
        localStorage.setItem("shelter",this.shelter)
    }

    getZip(){
        return localStorage.getItem('zipcode')
    }

    getBreed(){
        return localStorage.getItem('breed')
    }

    getShelter(){
        return localStorage.getItem('shelter')
    }

    logData(){
        console.log('breed:' + this.breed)
        console.log('zip:' + this.zipcode)
        console.log('shelter:' + this.shelter)

    }
}