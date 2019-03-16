# Copied from

https://developer.okta.com/blog/2018/11/15/node-express-typescript

Currently on "Note: If you changed the database administrator password, be sure to replace the default p@ssw0rd42 with that password in this file."

# Docker kinesis

[![](https://badge.imagelayers.io/vsouza/kinesis-local:latest.svg)](https://imagelayers.io/?images=vsouza/kinesis-local:latest "Get your own badge on imagelayers.io")
[![Docker Pulls](https://img.shields.io/docker/pulls/vsouza/kinesis-local.svg)](https://hub.docker.com/r/vsouza/kinesis-local/)

Build for AWS Kinesis local.

## What's Kinesis

Use Amazon Kinesis to collect and process large streams of data records in real time.

You'll create data-processing applications, known as Amazon Kinesis applications. A typical Amazon Kinesis application takes data from data generators called producers and puts it into an Amazon Kinesis stream as data records. These applications can use the Amazon Kinesis Client Library, and they can run on Amazon EC2 instances. The processed records can be sent to dashboards, used to generate alerts, dynamically change pricing and advertising strategies, or send data to a variety of other AWS services. For information about Amazon Kinesis features and pricing, see Amazon Kinesis.
[AWS Kinesis Docs](http://docs.aws.amazon.com/kinesis/latest/dev/introduction.html)

## What it uses

- **NodeJS** with Node Package Manager
- **[Kinesalite](https://github.com/mhart/kinesalite)** - thanks to [@mhart](http://www.github.com/mhart) to make it possible.

**to start your local Kinesis, run:**

`docker run -d -p 4567:4567 vsouza/kinesis-local --port 4567`

_Feel free to add parameters: ( see Kinesalite [doc](https://github.com/mhart/kinesalite) )_

`docker run -d -p 4567:4567 vsouza/kinesis-local --port 4567 --createStreaMs 5`

**to start kinesis inside compose, create docker-compose.yaml:**

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
