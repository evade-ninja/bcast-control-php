#!/bin/bash#!/usr/bin/env bash
cert_www="https://your-cert-location.local"
cert_name="interweb.crt"
local_cert_path="/etc/ssl/private"

# Default is 30 days (30d * 24h * 60m * 60s)
threshold_seconds=$((30 * 24 * 60 * 60))

