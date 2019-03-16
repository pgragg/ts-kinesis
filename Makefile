develop:
	docker run -d --name guitar-db -p 5432:5432 -e 'POSTGRES_PASSWORD=p@ssw0rd42' postgres && \
	npm run dev

kinesis: 
	docker run -d -p 4567:4567 vsouza/kinesis-local --port 4567

