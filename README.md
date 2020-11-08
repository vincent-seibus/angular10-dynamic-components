# Angular AOT Dynamic Components

Simple project to reporduce issue with an Angular Dynamic Components with The Ahead-of-Time (AOT) compiler.

## Run app 
IVY enable :

"angularCompilerOptions": {
    "enableIvy": true
}

it works in dev :
ng serve --open 

it doesn't works in prod :
ng serve --prod

IVY disable 

"angularCompilerOptions": {
    "enableIvy": false
}

it works in dev :
ng serve --open 

it works in prod :
ng serve --prod

