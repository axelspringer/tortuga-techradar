//This is the title for your window tab, and your Radar
document.title = "Tortuga Tech-Radar (November 2017)";


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':100,'name':'Adopt'}
                  ,{'r':200,'name':'Trial'}
                  ,{'r':300,'name':'Assess'}
                  ,{'r':400,'name':'Hold'}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1000;
var w = 1200;

var radar_data = [
    { "quadrant": "Techniques",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [ 
            // Adopt
            { name: 'Gitflow Workflow', pc: { r: 50, t: 125 }, movement: 'c' },
            {"name":"Microservices", "pc":{"r":75,"t":140},"movement":"c"},   
            {"name":"Build Pipelines", "pc":{"r":65,"t":130},"movement":"t"},  
            {"name":"Sacrificial Architecture", "pc":{"r":80,"t":100},"movement":"t"},   
            {"name":"Sensible defaults", "pc":{"r":80,"t":150},"movement":"c"},   
            {"name":"Infrastructur as Code", "pc":{"r":90,"t":130},"movement":"c"},  

            // Trial
            {"name":"Functional Reactive Programming", "pc":{"r":110,"t":140},"movement":"t"}, 
            {"name":"Serverside Javascript", "pc":{"r":112,"t":150},"movement":"t"}, 
            {"name":"Single Page App", "pc":{"r":150,"t":151},"movement":"c"},
            {"name":"Sensible Caching - Active Strategies", "pc":{"r":120,"t":141},"movement":"t"},

            {"name":"SaaS for non-core systems", "pc":{"r":225,"t":120},"movement":"c"},
            {"name":"Continuous Experimentation", "pc":{"r":230,"t":110},"movement":"c"},

            {"name":"Sensible Code Reviews", "pc":{"r":110,"t":110},"movement":"c"},
            {"name":"Valuable, cheap tests", "pc":{"r":130,"t":150},"movement":"c"},
           
            {"name":"Product-driven Design", "pc":{"r":90,"t":170},"movement":"t"}

        ]
    },
    { "quadrant": "Tools",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [ 

{ name: 'Docker', pc: { r: 90, t: 19 }, movement: 't' },
{ name: 'Git',    pc: { r: 90, t: 73 },    movement: 'c' },
{ name: 'Terraform',    pc: { r: 90, t: 60 },    movement: 'c' },

{ name: 'nginx (rtmp/fpm)',    pc: { r: 80, t: 80 },    movement: 'c' },
{ name: 'JIRA',    pc: { r: 70, t: 30 },    movement: 'c' }, 

{ name: 'Mesos',    pc: { r: 90, t: 30 },    movement: 'c' },
{ name: 'Marathon',    pc: { r: 95, t: 40 },    movement: 'c' },

{ name: 'Chronos',    pc: { r: 80, t: 20 },    movement: 'c' },
{ name: 'Zookeper',    pc: { r: 96, t: 50 },    movement: 'c' },

  { name: 'etcd',    pc: { r: 170, t: 29 },    movement: 't' }, 
  { name: 'CoreOS',    pc: { r: 150, t: 50 },    movement: 't' }, 
  { name: 'Traefik',    pc: { r: 140, t: 60 },    movement: 't' }, 
  { name: 'Docker Swarm',    pc: { r: 140, t: 75 },    movement: 't' }, 
  { name: 'Prometheus',    pc: { r: 180, t: 87 },    movement: 't' }, 
  { name: 'InfluxDB',    pc: { r: 180, t: 56 },    movement: 't' }, 
  { name: 'Grafana',    pc: { r: 180, t: 80 },    movement: 'c' }, 

  { name: 'Jenkins',    pc: { r: 280, t: 56 },    movement: 't' }, 

{ name: 'Json Web Tokens (JWT)',    pc: { r: 180, t: 65 },    movement: 'c' },

  { name: 'ELK',    pc: { r: 30, t: 72 },    movement: 'c',    domain: 'back-end' },
  { name: 'haproxy',    pc: { r: 80, t: 46 },    movement: 'c' },

  { name: 'mongoDB',    pc: { r: 330, t: 5 },    movement: 'c' }, 
  { name: 'Vagrant',    pc: { r: 320, t: 10 },    movement: 'c' }, 
  { name: 'Ubuntu',    pc: { r: 310, t: 7 },    movement: 'c' }, 
  { name: 'MySQL',    pc: { r: 300, t: 20 },    movement: 'c' }, 

  { name: 'memcached',    pc: { r: 340, t: 10 },    movement: 'c' },
  { name: 'Stash',    pc: { r: 340, t: 65 },    movement: 'c' }
  ]
    },
    { "quadrant": "Platforms & Services",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [ 
            {"name":"PagerDuty", "pc":{"r":110,"t":240},"movement":"c"}, 
            {"name":"Pingdom", "pc":{"r":110,"t":200},"movement":"c"}, 
            {"name":"AWS - EC2", "pc":{"r":90,"t":250},"movement":"c"},
            {"name":"S3-compatible Storage", "pc":{"r":90,"t":230},"movement":"c"},
            {"name":"AWS - RDS & DynamoDB", "pc":{"r":110,"t":230},"movement":"c"},
            {"name":"Github", "pc":{"r":100,"t":210},"movement":"c"},    
            
            {"name":"Akamai", "pc":{"r":110,"t":180},"movement":"c"},  
            {"name":"AWS - Cloudfront", "pc":{"r":120,"t":210},"movement":"c"}, 
        ]
    },
    { "quadrant": "Languages & Frameworks",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [ 
            // adopt
            { name: 'GO', pc: { r: 60, t: 290 },  movement: 'c' },

            { name: 'C/C++', pc: { r: 310, t: 278 },  movement: 'c' },        

            // trial
            {"name":"Vue.js", "pc":{"r":130,"t":355},"movement":"c"},   
            {"name":"Serverside Javascript ^", "pc":{"r":80,"t":280},"movement":"c"},
            {"name":"TypeScript ^", "pc":{"r":190,"t":290},"movement":"c"},
            {"name":"Angular", "pc":{"r":195,"t":310},"movement":"c"},

            {"name":"Swift", "pc":{"r":280,"t":300},"movement":"c"},  
            { name: 'RxJs',              pc: { r: 250, t: 338 },              movement: 'c',              domain: 'template' },
            { name: 'Web Components', pc: { r: 260, t: 330 },  movement: 'c' },

            { name: 'WordPress',   pc: { r: 370, t: 298 },              movement: 'c',              domain: 'template' },
            { name: 'PHP ^', pc: { r: 360, t: 330 },  movement: 'c' },
            { name: 'Drupal ^', pc: { r: 340, t: 310 },  movement: 'c' },


            {"name":"Coffeescript", "pc":{"r":320,"t":320},"movement":"c"},
        ]
    }
];
