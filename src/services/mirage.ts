import { createServer, Model } from "miragejs";

export const createServerMirageJs = () => {
    createServer({
        models: {
            feedback: Model,
        },
        seeds(server){
            server.db.loadData({
                feedbacks: [
                    {
                        id: 1,
                        feedbackText: 'Um código que para a solução do problema',
                        urlImageFeedback: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                        typeFeedback: 'Ideia',
                        imgFeedbackType: '/src/assets/idea.svg'
                    },
                    {
                        id: 2,
                        feedbackText: 'Desafio para treinar, resolva o bug',
                        urlImageFeedback: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                        typeFeedback: 'Bug',
                        imgFeedbackType: '/src/assets/bug.svg'
                    },
                    {
                        id: 3,
                        feedbackText: 'Tem ideia de qual linguagem seria essa???!',
                        urlImageFeedback: 'https://images.unsplash.com/photo-1453060113865-968cea1ad53a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                        typeFeedback: 'Outro',
                        imgFeedbackType: '/src/assets/other.svg'
                    },
                ]
            })
        },
        routes(){
            this.namespace = 'api';
    
            this.get('/feedbacks', () => {
                return this.schema.all('feedback')
            })
    
            this.post('/feedbacks', (schema, request) => {
                const data = request.requestBody;
                const dataJson = JSON.parse(data);
    
                return schema.create('feedback', dataJson);
            })
        }
    })
}

