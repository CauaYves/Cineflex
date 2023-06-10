# Simulador para venda de ingressos.

## Preview
  
  ![image](https://user-images.githubusercontent.com/108950428/223599690-4702385b-abdb-4681-a07a-8d02b735411e.png)
  
  
## GET Obter lista de filmes  
    #### Para obter os filmes, faça uma requisição `GET` para a URL
       
        ```https://mock-api.driven.com.br/api/v8/cineflex/movies``` 
    
    #### O servidor responde a esta requisição com um *array* de objetos que representam os filmes:  
        
        ```jsx
        [
        	{
                id: 1,
                title: "2067",
                posterURL: "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
                overview: "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
                releaseDate: "2020-10-01T00:00:00.000Z",
            },
            {
                id: 2,
                title: "Welcome to Sudden Death",
                posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
                overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
                releaseDate: "2020-09-29T00:00:00.000Z",
            }
        ]
        ```
        
## - **GET** Obter lista de sessões de um filme
    - Para obter as sessões de um filme, faça uma requisição `GET` para a URL (trocando `ID_DO_FILME` para o id do filme desejado.)
        
        ```
        https://mock-api.driven.com.br/api/v8/cineflex/movies/ID_DO_FILME/showtimes
        ```
        
    
    - O servidor responde a esta requisição com um objeto que representa o filme com os dias e suas sessões:
        
        ```jsx
        {
            "id": 1,
            "title": "2067",
            "posterURL": "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
            "overview": "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
            "releaseDate": "2020-10-01T00:00:00.000Z",
            "days": [
                {
                    "id": 24062021,
                    "weekday": "Quinta-feira",
                    "date": "24/06/2021",
                    "showtimes": [
                        {
                            "name": "15:00",
                            "id": 1
                        },
                        {
                            "name": "19:00",
                            "id": 2
                        }
                    ]
                },
                {
                    "id": 25062021,
                    "weekday": "Sexta-feira",
                    "date": "25/06/2021",
                    "showtimes": [
                        {
                            "name": "15:00",
                            "id": 3
                        },
                        {
                            "name": "19:00",
                            "id": 4
                        }
                    ]
                },
                {
                    "id": 26062021,
                    "weekday": "Sábado",
                    "date": "26/06/2021",
                    "showtimes": [
                        {
                            "name": "15:00",
                            "id": 5
                        },
                        {
                            "name": "19:00",
                            "id": 6
                        }
                    ]
                },
                {
                    "id": 27062021,
                    "weekday": "Domingo",
                    "date": "27/06/2021",
                    "showtimes": [
                        {
                            "name": "15:00",
                            "id": 7
                        },
                        {
                            "name": "19:00",
                            "id": 8
                        }
                    ]
                },
                {
                    "id": 28062021,
                    "weekday": "Segunda-feira",
                    "date": "28/06/2021",
                    "showtimes": [
                        {
                            "name": "15:00",
                            "id": 9
                        },
                        {
                            "name": "19:00",
                            "id": 10
                        }
                    ]
                },
                {
                    "id": 29062021,
                    "weekday": "Terça-feira",
                    "date": "29/06/2021",
                    "showtimes": [
                        {
                            "name": "15:00",
                            "id": 11
                        },
                        {
                            "name": "19:00",
                            "id": 12
                        }
                    ]
                },
                {
                    "id": 30062021,
                    "weekday": "Quarta-feira",
                    "date": "30/06/2021",
                    "showtimes": [
                        {
                            "name": "15:00",
                            "id": 13
                        },
                        {
                            "name": "19:00",
                            "id": 14
                        }
                    ]
                },
                {
                    "id": 1072021,
                    "weekday": "Quinta-feira",
                    "date": "01/07/2021",
                    "showtimes": [
                        {
                            "name": "15:00",
                            "id": 15
                        },
                        {
                            "name": "19:00",
                            "id": 16
                        }
                    ]
                }
            ]
        }
        ```
        
## - **GET** Obter lista de assentos de uma sessão
    - Para obter os assentos disponíveis de uma sessão, faça uma requisição `GET` para a URL (trocando `ID_DA_SESSAO` para a id da sessão desejada).
        
        ```
        https://mock-api.driven.com.br/api/v8/cineflex/showtimes/ID_DA_SESSAO/seats
        ```
        
        <aside>
        🚨 Os `id`s das **sessões** estão destacados em azul no item anterior (**GET** Obter lista de sessões de um filme). 
        
        **Não confundir com o id do dia da semana.**
        
        </aside>
        
    
    - O servidor responde a esta requisição com um objeto que representa a sessão com seus dias e seu filme:
        
        ```json
        {
            "id": 1,
            "name": "15:00",
            "day": {
        			"id": 24062021,
              "weekday": "Quinta-feira",
              "date": "24/06/2021",
        		},
            "movie": {
                "id": 1,
                "title": "2067",
                "posterURL": "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
                "overview": "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
                "releaseDate": "2020-10-01T00:00:00.000Z",
            },
            "seats": [
        				{
                    "id": 10001,
                    "name": "1",
                    "isAvailable": false,
                },
                
                {
                    "id": 10048,
                    "name": "48",
                    "isAvailable": true,
                },
                {
                    "id": 10049,
                    "name": "49",
                    "isAvailable": true,
                },
                {
                    "id": 10050,
                    "name": "50",
                    "isAvailable": true,
                },
            ]
        }
        ```
        
    
## - **POST** Reservar assentos
    - Para reservar assentos, faça uma requisição `POST` para a URL:
        
        ```
        https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many
        ```
        
    
    - Enviando no corpo da requisição um objeto no formato abaixo, sendo `ids` a array de ids dos assentos que você deseja reservar. Note que você deve enviar os **IDs** dos assentos, e não os seus nomes (`name`):
        
        ```jsx
        {
        	ids: [10015, 10016, 10017],
        	name: "Fulano",
        	cpf: "12345678900"
        }
        ```
