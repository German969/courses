## Mono Repo

### Create the repo
git init
create a new .gitignore
```
node_modules
.DS_Store
```
git add .
git ci -m "initial commit"

### Upload to GitHub
New Repository
git remote add origin [url]
git push origin master

### Create Gihub Actions
Github Repo -> Actions
Simple Workflow

tests.yml
```
name: tests

on:
  pull_request

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: cd auth && npm install && npm run test:ci
```

commit file
update package json `"test:ci": "jest"`

### Update project
git checkout to new branch
git commit & git push
create pull request manually
base: master compare: new-branch
Check PR for check pass

### Updating workflow
Create extra files for other test suites

### Listen for changes on specific files
```
name: tests-auth

on:
  pull_request
    paths:
      - 'auth/**'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: cd auth && npm install && npm run test:ci
```

## Deployment workflow
Create new workflow
deply-auth.yaml
```
name: deploy-auth

on:
  push:
    branches:
      - master
    paths:
      - 'auth/**'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: cd auth && docker build -t german969/auth .
      - run: docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD
        env:
          DOCKER_USERNAME: ${{ secrets.DOCKER_USERNAME }}
          DOCKER_PASSWORD: ${{ secrets.DOCKER_PASSWORD }}
      - run: docker push german969/auth
```

### Add Secrets for username and pass
Settings -> Secrets -> New Secret
Add username and password for docker

### Update Deployment
```
      - run: docker push german969/auth
      - uses: digitalocean/action-doctl@v2
        with:
          token: ${{ secrets.DIFITALOCEAN_ACCESS_TOKEN }}
      - run: doctl kubernetes cluster kubeconfig save ticketing
      - run: kubectl rollout reatart deployment auth-depl
```

Add secret for do token generating in dashboard API token

Create new deployment file for all deployments
```
name: deploy-manifests

on:
  push:
    branches:
      - master
    paths:
      - 'infra/**'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: digitalocean/action-doctl@v2
        with:
          token: ${{ secrets.DIFITALOCEAN_ACCESS_TOKEN }}
      - run: doctl kubernetes cluster kubeconfig save ticketing
      - run: kubectl apply -f infra/k8s && kubectl apply -f infra/k8s-prod
```

Create secret for STRIPE_KEY and JWT_KEY in digital ocean