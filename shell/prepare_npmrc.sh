if [[ $CI == "true" ]]; then
    echo @workdigital:registry=https://${CI_SERVER_HOST}/api/v4/projects/${CI_PROJECT_ID}/packages/npm/ >.npmrc
    echo //${CI_SERVER_HOST}/api/v4/projects/${CI_PROJECT_ID}/packages/npm/:_authToken="${CI_JOB_TOKEN}" >>.npmrc
    echo legacy-peer-deps=true >>.npmrc
else
    echo @workdigital:registry=https://gitlab.com/api/v4/projects/${GITLAB_PROJECT_ID}/packages/npm/ >.npmrc
    echo //gitlab.com/api/v4/projects/${GITLAB_PROJECT_ID}/packages/npm/:_authToken="${GITLAB_PROJECT_ACCESS_TOKEN}" >>.npmrc
    echo legacy-peer-deps=true >>.npmrc
fi
