var app = new Vue(
    {
        el: '#container-app',
        data: {
            newMsg: '',
            contattoSelezionato: null,
            contacts:[
                {
                    nome: 'Michele',
                    avatar:'_1',
                    visibile: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    nome: 'Fabio',
                    avatar:'_2',
                    visibile: false,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera cci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:22',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'send'
                        }
                    ],
                },
                {
                    nome: 'Samuele',
                    avatar:'_3',
                    visibile: false,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    nome: 'Luisa',
                    avatar:'_4',
                    visibile: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        },
                    ],
                },
            ]

        },
        methods: {
            allContactsNotVisibile(){
                this.contacts.forEach(element => element.visibile = false);
            },
            selectContact(index){
                this.allContactsNotVisibile();
                !this.contacts[index].visibile ? this.contacts[index].visibile = true : this.contacts[index].visibile = false;
                this.contattoSelezionato = index;
            },
            addNewMsg(){
                let i = this.contattoSelezionato;
                this.contacts[i].messages.push({
                    date: '16/11/2021',
                    text: this.newMsg,
                    status: 'sent'
                });
                this.newMsg = '';
            }
        }
    }
);

