FROM ubuntu:20.04

# Install dependencies
RUN apt-get update && apt-get install -y \
  curl \
  sudo \
  git \
  unzip \
  libicu-dev \
  && rm -rf /var/lib/apt/lists/*

# Download and install GitHub Actions runner
RUN curl -o actions-runner.tar.gz -L https://github.com/actions/runner/releases/download/v2.302.0/actions-runner-linux-x64-2.302.0.tar.gz \
  && mkdir /actions-runner \
  && tar xzf actions-runner.tar.gz -C /actions-runner \
  && rm actions-runner.tar.gz

# Set working directory
WORKDIR /actions-runner

# Install dependencies for the runner
RUN ./bin/installdependencies.sh

# Add entrypoint
ENTRYPOINT ["./bin/runner", "--once"]
