"ICTSE2g RoelofRoos S1073508.zip": gulpfile.js/ spec/ src/ vendor/ package.json
	zip -FS -r0 \
		"ICTSE2g RoelofRoos S1073508.zip" \
		gulpfile.js/ \
		spec/ \
		src/ \
		vendor/ \
		dist/ \
		package-lock.json \
		package.json \

.PHONY: pages

pages:
	rm -rf dist/* docs/
	yarn build
	mkdir docs/
	cp -r dist/* docs/
	git commit --only --message="Update GitHub Pages directory" -- docs/ || true
