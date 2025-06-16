# ---- Stage 1: Build base ----
FROM python:3.10-slim as base

# Set work directory
WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy source code
COPY . .

# ---- Final Stage ----
FROM python:3.10-slim

WORKDIR /app

# Copy installed site packages and source code from build stage
COPY --from=base /usr/local/lib/python3.10/site-packages /usr/local/lib/python3.10/site-packages
COPY --from=base /app /app

# Expose port and run the Flask app
EXPOSE 5000
CMD ["python", "app.py"]
