develop:
	docker run -d -p 4567:4567 vsouza/kinesis-local --port 4567 && \
	npm run start
