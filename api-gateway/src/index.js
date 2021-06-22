import {  ApolloServer } from 'apollo-server-express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';
const port = process.env.PORT;

const apolloServer = new ApolloServer({
    context:a=>a,
    resolvers,
    typeDefs
})

const app = express();

app.use(cookieParser());

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type, Accept,Authorization,Origin");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
  });

  var whitelist = ['http://localhost:8080']; //white list consumers
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true, //Credentials are cookies, authorization headers or TLS client certificates.
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'device-remember-token', 'Access-Control-Allow-Origin', 'Origin', 'Accept']
};

app.use(cors(corsOptions));
app.use(function(req,res,next) {
    if (req.cookies.userSessionId) {
        res.locals.userSessionId= req.cookies.userSessionId;    
    }
    next();
})
apolloServer.applyMiddleware({app, cors: false, path: "/graphql"});

app.listen(port, "0.0.0.0", () => {
    console.log(`server is started for graphql ${port}`);
} );