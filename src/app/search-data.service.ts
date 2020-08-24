export class SearchDataService{
    
    zipcode='hi'
    breed=''
    shelter=''

    
    setZip(zipcode: string){
        this.zipcode=zipcode;
    }

    setBreed(breed : string){
        this.breed = breed;
    }

    setShelter(shelter : string){
        this.shelter = shelter;
    }

    getZip(){
        console.log(this.zipcode)
        return this.zipcode;
    }

    getBreed(){
        return this.breed;
    }

    getShelter(){
        return this.shelter;
    }

    logData(){
        console.log('breed:' + this.breed)
        console.log('zip:' + this.zipcode)
        console.log('shelter:' + this.shelter)

    }
}