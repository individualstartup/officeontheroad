#!/bin/bash

openapi-generator-cli generate -i http://localhost:8282/actuator/openapi/micrositeApi -g typescript-fetch  --skip-validate-spec
