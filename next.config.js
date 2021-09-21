
module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  env: {
    SHEET_ID: '1gDkU3nOi9Sbkj72C5SJoC7Kyx3jOAZxW0Bh7JGfb1cY',
    GOOGLE_SECRETS: {
      type: "service_account",
    project_id: "grow-up-4d764",
    private_key_id: "e384f2b12d85e70ef37346fd58ba89e02f257cb1",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC7pAsuItCj8i/R\nK5IWj9KBxRbWq0RaWRexjm+qCSShR/Bos1JBCs8Qb5i5mM2TLRIt/v80Rdm60tZa\nnIh/nJRUmdLGxVCQcmpCS+cb/zYU5DQUsERVnCY2Nu1qMLdcYxrtgYQQajRS+5AK\nm+1YPHeu31pQuPqDmEIbNCpxg4JhoOA8OP5vI7dQ58tP4zI8134yXveHDK+OFlse\nTQKwph+2N8WCA+8MjcWR5mRNqZRRw2aFwV81QyEXQzdnhxDOJjME7E1U7qQNmSAP\nk0OivR6rs71rTZXawQXnRjIkZt8uOoqQYzTYbC7dIUGKCjSFTzoS971tP6I2q8zP\nha2toqpVAgMBAAECggEAAbSNJw9ivTqxCI7QaXgUV62TQyj6gNlMB9PdjyDW8ZUW\nMD1nXMP2YckOpqrAcFTGh4VIi6pFPxdpCOXHSWTPTEpUyg2pz8ZA0cPS093osrcb\nag/rO92LBo8bog1s45NBZjGSu66oNXp0mRDighzHXniuxddu7DQKb1wOaEp9Rg0M\npkp1jY4j+i1kuOEVI0kBi1Un7vXjGbPuyzIxHqgtfwvfSjuBssPh+qaG7s1h0sHs\nwuLj/uqsmswKfKW1VXLGvCVdVFvDQzKfZ0DBGOLtBgjNt9odK2erExtq0tkzw7/m\niXs5hSArt3gtQdPKFpZ5vG/0lQBP6FIKjJtOHYEbgQKBgQDktf5tz74cb+Rmg9Yb\nYpY2WxhQIhwV2uBHMnpkuzWc6FREQJSjrtJqCFTmqZdP1MdgGQjBfrFdBgtUltJq\nsGUrtFgeRJfBCkYaJfTrA+pBarHgNgIZgKGI4sMhs+hh0762OSsOt8ZfW256pJ8W\n3OiQVxXlCvbKN/lfQfJKsv8/sQKBgQDSB460YJpqbkOm3zgQVUsRXcQh7bMGMMo8\n3tkvu3VCUjNOffRlYd3EWxouJ6Hm5k/16jS2YbFvML9UKdojIEkdyOKi49tDDSxs\nx1ZUegVzGxXp/i2lpkVHNwTmM/brUmAGoyRKbPHIyMAMAl5B8b5g9chOQkP7p+VJ\n24V+e78B5QKBgDq+aBBKeJkTQEX4fMjh5JUnhrImYLJYWpzO4VL4JsgbgHFbaRI1\nuAPWCgCI9L1jeKY9J9uTL/klsUlTx83xarr0AmIb2iKSAfl7YFHw2n1c6z0cgiOM\nv3DKVbZVYE2oNmbVfjK0jzY05MaJe/dCXFWemJgQ3dyIzftik9oN6bOxAoGBAJGx\nuGacFMH712YstmFuKXLUjrfSgjurIL90/0hDS6ZEC19JtH2XlBUf9VtLFt5rqdA3\nNXXG8yTktfSWS8HOJapJrh283l73Bng3F0Xml10vztXRAq1EWA58tiNSrNi0/fPc\nu9H9HQRhbgdmpSgtoBj2porTIQGziDTh2QrSoL+ZAoGBAJKx9V0EuzLmAXavrjn6\nr9UuiSRwtjTBt6H5SZTstGrDpXLUrdWR58dc3c7Ij1ROV4taW1s5YneMOba6RQz5\nYiZMN5Krio7SNlR5bvcz/ouyVLySXh24CNOWJLd6NO6tqTKYghGbOI0y4Mh73sqR\nCwzeUS88YtPcJ/ud/gkYqRgB\n-----END PRIVATE KEY-----\n",
    client_email: "grow-up-4d764@appspot.gserviceaccount.com",
    client_id: "100256022625533996450",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/grow-up-4d764%40appspot.gserviceaccount.com"
    }
  }
}