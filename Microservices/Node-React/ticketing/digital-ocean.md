## Deployment Kubernetes in Digital Ocean
Find cupon code
SignUp
Create -> Cluster
Cluster capacity -> 10$/month -> 3 nodes

Install management tools -> digital Ocean CLI
`doctl` -> digital ocean cli

### Authenticate
Find API and generate token
doctl auth init [token]

### Get connection info
doctl kubernetes cluster kubeconfig save <cluster_name>
Now all commands run on this context

### List all contexts
kubectl config view

### Use a different context
kubectl config use-context <context_name>

## Create secrets
kubectl config use-context [difital-ocean]
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=adfhsjkbfb
kubectl create secret generic stripe-SECRET --from-literal=STRIPE_KEY=klsdjfhlaksdj

### Install ingress-nginx on digital ocean cluster
Go to ingress-nginx page anf find digital ocean installation
Connect kubectl to digital ocean context
Paste command and run

### Update
Git commit and git push to master
Check actions tab on Github

### Check
kubectl get pods
kubectl logs [pod-name]

**Repeat process for every service**

### Next Step
Buy a domain name and point it to the load balancer
namecheap

#### Update the baseURL in client service's build-client file
```
return axios.create({
      baseURL: 'Whatever_your_purchased_domain_is',
      headers: req.headers,
    });
```

#### Disable HTTPS Checking in app.ts
```
  cookieSession({
    signed: false,
    secure: false,
  })
```

#### Add Load Balancer
ingress-srv.yaml
```
---
apiVersion: v1
kind: Service
metadata:
  annotations:
    service.beta.kubernetes.io/do-loadbalancer-enable-proxy-protocol: 'true'
    service.beta.kubernetes.io/do-loadbalancer-hostname: 'www.ticketing-app-prod.xyz'
  labels:
    helm.sh/chart: ingress-nginx-2.0.3
    app.kubernetes.io/name: ingress-nginx
    app.kubernetes.io/instance: ingress-nginx
    app.kubernetes.io/version: 0.32.0
    app.kubernetes.io/managed-by: Helm
    app.kubernetes.io/component: controller
  name: ingress-nginx-controller
  namespace: ingress-nginx
spec:
  type: LoadBalancer
  externalTrafficPolicy: Local
  ports:
    - name: http
      port: 80
      protocol: TCP
      targetPort: http
    - name: https
      port: 443
      protocol: TCP
      targetPort: https
  selector:
    app.kubernetes.io/name: ingress-nginx
    app.kubernetes.io/instance: ingress-nginx
    app.kubernetes.io/component: controller
```

### Update DNS
namecheap -> nameserver -> custom dns -> digitalocean.com
digital ocean -> domains -> add new domain
A record -> @ [load-balancer] TTL : 30s
CNAME -> www @ 30
update ingress-nginx with real host and push changes to prod

## Next steps

### Add HTTPS
cert-manager.io

### Add Email Support
Mailchimp/Sendgrid/similar

### Add build steps
Create dockerfiles for production build in proction mode (command) npm run build for nest eg

### Create a staging cluster
New cluster for testing