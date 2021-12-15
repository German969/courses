# Kubernetes

## Config file (YAML)

Run config file
`kubectl apply -f config.yaml`

To apply multiple files at once
`kubectl apply -f .`

### Pod creation
A pod usually have one or more containers

```
apiVersion: v1
kind: Pod
metadata:
  name: [name]
spec:
  containers:
    - name: [name]
      image: user/image:version
```

List all running pods
`kubectl get pods`
`k get pods` (alias)

Execute a command in a running pod
`kubectl exec -it [pod_name] [cmd]`
ie `sh`

Print out logs from a pod
`kubectl logs [pod_name]`

Delete a pod
`kubectl delete pod [pod_name]`

Print information about the running pod
`kubectl describe pod [pod_name]`

### Deployment Creation
A deployment creates a series oof pods

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: name-depl
specs:
  replicas: 1
  selector:
    matchLabels:
      app: [name]
  template:
    metadata:
      labels:
        app: [name]
    spec:
      containers:
        - name: [name]
          image: user/image:version
```

Get all deployments
`kubectl get deployments`
_you can also see the pods created inside a deployment with `kubectl get pods`_
_if you delete a deployment pod it will be recreated_

Print details about a deployment
`kubectl describe deployment [depl name]`

Delete a deployment
`kubectl delete deployment [depl name]`
_this will delete any pod created by the deployment_


### Rebuilding a deployment

Method 1 (not optimal):
- Make the change to the project
- Rebuild the image with a new version tag
- Update the version in the config file
- Apply the config file

Method 2:
- Use the latest tag in the deplyment version of the config file
- Apply the config file
- Update the code
- Rebuild the image
- Push the image to docker hub
- Run the command `kubectl rollout restart deployment [depl name]`

Restart a deployment to pull a new image
`kubectl rollut restart deployment [depl name]`


### Services
A service allow us to communicate with the pods or between them

List all services
`kubectl get services`

You can group deployments in the same config file using
`---`

#### Types
**ClusterIP**: Setup an url to access the pod. Only exposes it in the cluster
**Node Port**: Makes the pod accesible from outside the cluster. Used for dev purposes
**Load Balancer**: Make a pod accesible outside the cluster. The right way to expose it to the world
**External Name**: Redirects an in-cluster request to a CNAME url

#### Creating a Node Port Service
```
apiVersion: v1
kind: Service
metadata:
  name: name-srv
spec:
  type: NodePort
  selector:
    app: [name]
  ports:
    - name: [name]
    protocol: TCP
    port: 4000
    targetPort: 4000
```

List all services
`kubectl get services`
_The assigned port to access the pod will be described with this command_

_From Mac is running inside localhost, for Linux is in minikube IP_

#### Creating a ClusterIP Service
It allow the pods to communicate to each other

```
apiVersion: v1
kind: Service
metadata:
  name: name-srv
spec:
  selector:
    app: [name]
  ports:
    - name: [name]
      protocol: TCP
      port: [port]
      targetPort: [port] 
```

*_Inside the code we need to use the url of the ClusterIP (name) we want to reach_

#### Creating a Load Balancer Service

Using the ingress-nginx tool
`https://kubernetes.github.io/ingress-nginx/deploy/`

Applying the config file from ingress-nginx it creates a LoadBalancer service and an ingress controller
