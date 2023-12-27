.PHONY: create-prettier-config format

create-prettier-config:
	@echo 'Creating .prettierrc.json...'
	@if [ ! -e .prettierrc.json ]; then \
		echo 'Creating default .prettierrc.json configuration file...'; \
		echo '{' > .prettierrc.json; \
		echo '    "semi": false,' >> .prettierrc.json; \
		echo '    "singleQuote": true,' >> .prettierrc.json; \
		echo '    "tabWidth": 4,' >> .prettierrc.json; \
		echo '    "printWidth": 80,' >> .prettierrc.json; \
		echo '    "trailingComma": "all"' >> .prettierrc.json; \
		echo '}' >> .prettierrc.json; \
		echo 'Done! .prettierrc.json file created with default settings.'; \
	fi

format:
	@echo 'Formatting code...'
	@prettier --write "**/*.js"
	@echo 'Done!'
