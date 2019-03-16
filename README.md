# Copied from 
https://developer.okta.com/blog/2018/11/15/node-express-typescript

Currently on "Now, update src/index.ts to use dotenv to configure the application server port value." 

# Docker kinesis
[![](https://badge.imagelayers.io/vsouza/kinesis-local:latest.svg)](https://imagelayers.io/?images=vsouza/kinesis-local:latest 'Get your own badge on imagelayers.io')
[![Docker Pulls](https://img.shields.io/docker/pulls/vsouza/kinesis-local.svg)](https://hub.docker.com/r/vsouza/kinesis-local/)

Build for AWS Kinesis local.

## What's Kinesis

Use Amazon Kinesis to collect and process large streams of data records in real time.

You'll create data-processing applications, known as Amazon Kinesis applications. A typical Amazon Kinesis application takes data from data generators called producers and puts it into an Amazon Kinesis stream as data records. These applications can use the Amazon Kinesis Client Library, and they can run on Amazon EC2 instances. The processed records can be sent to dashboards, used to generate alerts, dynamically change pricing and advertising strategies, or send data to a variety of other AWS services. For information about Amazon Kinesis features and pricing, see Amazon Kinesis.
[AWS Kinesis Docs](http://docs.aws.amazon.com/kinesis/latest/dev/introduction.html)

## What it uses

 * __NodeJS__ with Node Package Manager
 * __[Kinesalite](https://github.com/mhart/kinesalite)__ - thanks to [@mhart](http://www.github.com/mhart) to make it possible.


__to start your local Kinesis, run:__

`docker run -d -p 4567:4567  vsouza/kinesis-local --port 4567`

*Feel free to add parameters: ( see Kinesalite [doc](https://github.com/mhart/kinesalite) )* 

`docker run -d -p 4567:4567  vsouza/kinesis-local --port 4567 --createStreaMs 5`

__to start kinesis inside compose, create docker-compose.yaml:__

```
version: '3.1'
services:
  kinesis:
    image: vsouza/kinesis-local:latest
    command: --port 4567
    restart: always
    ports:
      - 4567:4567
```

## License

[MIT License](http://vsouza.mit-license.org/) © Vinicius Souza
