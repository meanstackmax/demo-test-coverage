rm -R dist | true
rm -R coverage | true
rm -R storybook-static | true

npm run test:coverage

if lsof -Pi :6006 -sTCP:LISTEN -t >/dev/null ; then
    echo "use already running storybook"
    npm run test-storybook:coverage 
else
    echo "start storybook"
    npm run storybook & sleep 10 && npm run test-storybook:coverage
    npm run kill-port 6006
fi

npm run test-all:coverage

echo "Done - please restart live-server"