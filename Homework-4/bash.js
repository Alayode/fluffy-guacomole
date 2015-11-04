/*
Chris Samuel
ksamuel.chris@me.com

Filename : Bash.js

Description: This script will be use to do administrative work
in the mongo shell using the bash to pipe the code into mongo
*/

killall mongod
mkdir WiredTiger
mongod -dbpath WT -storageEngine WiredTiger
mongo // use WT
    db.foo.stats(); //info
