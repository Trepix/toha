.DEFAULT_GOAL   := help

.PHONY: help
help: ## Display this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: build-assets
build-assets: ## Build the assets
	docker run --rm \
		--platform linux/amd64/v2 \
		--volume="${PWD}:/src" \
		-v /src/node_modules \
		--name webpack \
		trepix/web-assets-builder:latest \
		build

.PHONY: build-docker-image
build-docker-image: ## Build docker image to build the assets
	docker build --platform linux/amd64/v2 -t trepix/web-assets-builder -f infrastructure/Dockerfile .


.PHONY: deploy-docker-image
deploy-docker-image: ## Deploy docker image to build the assets
	docker push trepix/web-assets-builder:latest