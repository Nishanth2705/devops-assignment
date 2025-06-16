import pytest
from app import app

@pytest.fixture
def client():
    with app.test_client() as client:
        yield client

def test_health(client):
    response = client.get('/health')
    assert response.status_code == 200
    assert response.json == {"status": "ok"}

def test_message(client):
    response = client.get('/api/message')
    assert response.status_code == 200
    assert "message" in response.json
