import{r as i,o as r,a as s,d as t,F as o,c as d,b as e,e as a}from"./app.755de88b.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";const c={},l=d('<h1 id="mermaid-\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#mermaid-\u6D4B\u8BD5" aria-hidden="true">#</a> Mermaid \u6D4B\u8BD5</h1><h2 id="\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#\u7279\u6027" aria-hidden="true">#</a> \u7279\u6027</h2><ul><li>\u81EA\u52A8\u5207\u6362\u4E3B\u9898\uFF1A\u4EAE\u8272/\u6697\u8272</li></ul><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><h3 id="\u6D41\u7A0B\u56FE" tabindex="-1"><a class="header-anchor" href="#\u6D41\u7A0B\u56FE" aria-hidden="true">#</a> \u6D41\u7A0B\u56FE</h3>',5),m=e("h3",{id:"\u65F6\u5E8F\u56FE",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u65F6\u5E8F\u56FE","aria-hidden":"true"},"#"),a(" \u65F6\u5E8F\u56FE")],-1),_=e("h3",{id:"\u7C7B\u56FE",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u7C7B\u56FE","aria-hidden":"true"},"#"),a(" \u7C7B\u56FE")],-1),f=e("h3",{id:"er\u56FE",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#er\u56FE","aria-hidden":"true"},"#"),a(" ER\u56FE")],-1),u=e("h3",{id:"\u72B6\u6001\u56FE",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u72B6\u6001\u56FE","aria-hidden":"true"},"#"),a(" \u72B6\u6001\u56FE")],-1),g=e("h3",{id:"\u7528\u6237\u65C5\u7A0B\u56FE",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u7528\u6237\u65C5\u7A0B\u56FE","aria-hidden":"true"},"#"),a(" \u7528\u6237\u65C5\u7A0B\u56FE")],-1),x=e("h3",{id:"\u7518\u7279\u56FE",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u7518\u7279\u56FE","aria-hidden":"true"},"#"),a(" \u7518\u7279\u56FE")],-1),q=e("h3",{id:"\u997C\u72B6\u56FE",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u997C\u72B6\u56FE","aria-hidden":"true"},"#"),a(" \u997C\u72B6\u56FE")],-1),y=e("h3",{id:"\u9700\u6C42\u56FE",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u9700\u6C42\u56FE","aria-hidden":"true"},"#"),a(" \u9700\u6C42\u56FE")],-1);function b(k,p){const n=i("Mermaid");return r(),s(o,null,[l,t(n,{code:`flowchart TD
    B["fa:fa-twitter for peace"]
    B-->C[fa:fa-ban forbidden]
    B-->D(fa:fa-spinner);
    B-->E(A fa:fa-camera-retro perhaps?)
`}),m,t(n,{code:`sequenceDiagram
    autonumber
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
`}),_,t(n,{code:` classDiagram
      Animal <|-- Duck
      Animal <|-- Fish
      Animal <|-- Zebra
      Animal : +int age
      Animal : +String gender
      Animal: +isMammal()
      Animal: +mate()
      class Duck{
          +String beakColor
          +swim()
          +quack()
      }
      class Fish{
          -int sizeInFeet
          -canEat()
      }
      class Zebra{
          +bool is_wild
          +run()
      }
`}),f,t(n,{code:`
erDiagram
    CAR ||--o{ NAMED-DRIVER : allows
    CAR {
        string allowedDriver FK "The license of the allowed driver"
        string registrationNumber
        string make
        string model
    }
    PERSON ||--o{ NAMED-DRIVER : is
    PERSON {
        string driversLicense PK "The license #"
        string firstName
        string lastName
        int age
    }

`}),u,t(n,{code:`stateDiagram-v2
    [*] --> Still
    Still --> [*]

    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]
`}),g,t(n,{code:`journey
    title My working day
    section Go to work
      Make tea: 5: Me
      Go upstairs: 3: Me
      Do work: 1: Me, Cat
    section Go home
      Go downstairs: 5: Me
      Sit down: 5: Me
`}),x,t(n,{code:`gantt
    title A Gantt Diagram
    dateFormat  YYYY-MM-DD
    section Section
    A task           :a1, 2014-01-01, 30d
    Another task     :after a1  , 20d
    section Another
    Task in sec      :2014-01-12  , 12d
    another task      : 24d
`}),q,t(n,{code:`pie
    title Key elements in Product X
    "Calcium" : 42.96
    "Potassium" : 50.05
    "Magnesium" : 10.01
    "Iron" :  5
`}),y,t(n,{code:`    requirementDiagram

    requirement test_req {
    id: 1
    text: the test text.
    risk: high
    verifymethod: test
    }

    functionalRequirement test_req2 {
    id: 1.1
    text: the second test text.
    risk: low
    verifymethod: inspection
    }

    performanceRequirement test_req3 {
    id: 1.2
    text: the third test text.
    risk: medium
    verifymethod: demonstration
    }

    interfaceRequirement test_req4 {
    id: 1.2.1
    text: the fourth test text.
    risk: medium
    verifymethod: analysis
    }

    physicalRequirement test_req5 {
    id: 1.2.2
    text: the fifth test text.
    risk: medium
    verifymethod: analysis
    }

    designConstraint test_req6 {
    id: 1.2.3
    text: the sixth test text.
    risk: medium
    verifymethod: analysis
    }

    element test_entity {
    type: simulation
    }

    element test_entity2 {
    type: word doc
    docRef: reqs/test_entity
    }

    element test_entity3 {
    type: "test suite"
    docRef: github.com/all_the_tests
    }


    test_entity - satisfies -> test_req2
    test_req - traces -> test_req2
    test_req - contains -> test_req3
    test_req3 - contains -> test_req4
    test_req4 - derives -> test_req5
    test_req5 - refines -> test_req6
    test_entity3 - verifies -> test_req5
    test_req <- copies - test_entity2
`})],64)}var D=h(c,[["render",b]]);export{D as default};
