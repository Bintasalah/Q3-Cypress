const { beforeEach } = require("mocha");

describe('test API',()=>{
  beforeEach(()=>{
    cy.fixture("jeudedonées".search("note"))
   
  });
  it('creation utilsateur',()=>{
    cy.request('POST','https://practice.expandtesting.com/notes/api/users/register',{
           headers:{
            accept: "application/json"
          },
            name:"oumou",
            email:"oumou2020@gmail.com",
            password:"1234567890"
    }).then((response)=>{
        expect(response.status).to.equal(201);
        expect(response.body.name).to.equal("oumou");
        expect(response.body.email).to.equal("oumou2020@gmail.com");
    });
    });
    it.only('login',()=>{
      cy.request('POST','https://practice.expandtesting.com/notes/api/users/login',{
             headers:{
              accept: "application/json"
            },
              email:"oumou2020@gmail.com",
              password:"1234567890"
      }).then((response)=>{
          expect(response.status).to.equal(200);
          expect(response.body.email).to.equal("oumou2020@gmail.com");
          expect(response.body.password).to.equal("1234567890");
      });
      });
it('creation note Home', () => {
    const token = "e33c806516cf47fab6190f83f2d6535de0a1326fdd284e849d71327b60a55827";
    cy.request({
      method: 'POST',
      url: 'https://practice.expandtesting.com/notes/api/notes',
      headers: {
        'x-auth-token': token,
      },
      body: {
        "title": "note1",
        "category": "Home",
        "description": "mangue",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.data.title).to.equal("note1");
      expect(response.body.data.category).to.equal("Home");
      expect(response.body.data.description).to.equal("mangue");
      
    });
  });
  it('creation note Work', () => {
    const token = "e33c806516cf47fab6190f83f2d6535de0a1326fdd284e849d71327b60a55827";
    cy.request({
      method: 'POST',
      url: 'https://practice.expandtesting.com/notes/api/notes',
      headers: {
        'x-auth-token': token,
      },
      body: {
        "title": "note2",
        "category": "Work",
        "description": "orange",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.data.title).to.equal("note2");
      expect(response.body.data.category).to.equal("Work");
      expect(response.body.data.description).to.equal("orange");
    });
  });
  it('creation note Personal', () => {
    const token = "e33c806516cf47fab6190f83f2d6535de0a1326fdd284e849d71327b60a55827";
    cy.request({
      method: 'POST',
      url: 'https://practice.expandtesting.com/notes/api/notes',
      headers: {
        'x-auth-token': token,
      },
      body: {
        "title": "note3",
        "category": "Personal",
        "description": "kiwi",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.data.title).to.equal("note3");
      expect(response.body.data.category).to.equal("Personal");
      expect(response.body.data.description).to.equal("kiwi");
    });
  })
  it('put',()=>{
    cy.request({
      method:'PUT',
      url:'https://practice.expandtesting.com/notes/api/notes/646e11a456390602117642b6',
      headers:{
        'x-auth-token': token,
      },
      body: {
        "title": "note2",
        "category": "Work",
        "description": "Pomme",
      },
      failOnStatusCode: true,
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.data.title).to.equal("note2");
      expect(response.body.data.category).to.equal("Work");
      expect(response.body.data.description).to.equal("pomme");
    })
  })
  it('delete',()=>{
    cy.request('DELETE','https:practice.expandtesting.com/notes/api/notes/646e08775639060211764281').then((response) =>{
      expect(response.status).to.equal(200);
    })
  })
});
    