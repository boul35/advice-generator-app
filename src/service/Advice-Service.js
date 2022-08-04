class AdviceService {


    constructor() {}

    adviceUrl = "https://api.adviceslip.com/advice";

    async getAdvice() {

        try {
            const response = await fetch(this.adviceUrl)
            if (!response.ok) throw new Error(response.statusText);
            const slip = await response.json();
           
            return slip
            
        } catch (e) {

            console.error(e);
            return [];
        }
    }


}

export default AdviceService