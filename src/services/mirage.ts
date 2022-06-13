import { createServer, Model } from "miragejs";

export const createServerMirageJs = () => {
    createServer({
        models: {
            feedbacks: Model,
        },
        
        routes(){
            this.namespace = 'api';
    
            this.get('/feedbacks', () => {
                return this.schema.all('feedbacks')
            })
    
            this.post('/feedbacks', (schema, request) => {
                const data = request.requestBody;
                const dataJson = JSON.parse(data);
    
                return schema.create('feedbacks', dataJson);
            })
        }
    })
}

