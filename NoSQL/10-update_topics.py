#!/usr/bin/env python3
"""
Lists all documents in a MongoDB collection.
"""


def update_topics(mongo_collection, name, topics):
    """
    MongoDB collection update function."""
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )