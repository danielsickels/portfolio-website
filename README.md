# Personal Portfolio Website  

## Please visit https://dannysickels.com/ to see this website live!

---

## Overview  

This was truly my first **"Big Project"**, and was a lot of fun putting together. It helped that I had people for support when developing this, which led to me easily initializing my first Next.js project. 

## Features
- **Responsive Design:** Optimized for various screen sizes, ensuring a seamless experience on desktops, tablets, and mobile devices.  
- **Project Showcase:** Highlights key projects with descriptions, technologies used, and links to live demos or repositories.  
- **Contact Form:** Allow visitors, _like yourself!_, to get in touch with me directly through the website.  
### _Frontend_:
- **Next.js**
- **Tailwind CSS**
### _Backend_:
- **Node.js**
### Containerization / Deployment:
- **Docker**
- **Kubernetes**

---
  
## Getting Started  

To set up and run this project locally, follow the steps below.

### Prerequisites
Ensure you have the following installed on your system:

Node.js  
Docker  
Git  

### Clone the Repository:  

```
git clone https://github.com/danielsickels/portfolio-website.git
cd portfolio-website
```
Install necessary dependencies.  

To run the application locally, execute the following script:
```bash run.sh```
After running the script, open your browser and navigate to (http://localhost:3000) to view the website.

---

### Deployment
This project includes configurations for containerization and deployment using Docker and Kubernetes.
```
docker build -t portfolio-website .
docker run -p 3000:3000 portfolio-website
```

Ensure you have the necessary permissions and context set for your Kubernetes cluster before deploying.
```kubectl apply -f k8s/```
