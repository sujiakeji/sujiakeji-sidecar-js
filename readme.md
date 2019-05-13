```
docker build -t sujiakeji/sujiakeji-sidecar-js .

docker run -it --rm \
  --name sujiakeji-sidecar-js \
  -p 11100:11100 \
  sujiakeji/sujiakeji-sidecar-js
```

http://localhost:11100/health
