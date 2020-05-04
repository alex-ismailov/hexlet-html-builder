install:
	npm install

test:
	npm test

publish:
	npm publish --dry-run

lint:
	npx eslint .

logs:
	git log --oneline --decorate --graph --all