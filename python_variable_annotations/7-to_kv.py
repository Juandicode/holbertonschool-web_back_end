#!/usr/bin/env python3
from typing import Union, Tuple
"""Module that defines a function to convert a key-value pair into a tuple."""
def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple with the string key and the square of the value."""
    return (k, float(v ** 2))
