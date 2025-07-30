#!/usr/bin/env python3
from typing import Callable
"""Module that defines a function to create a multiplier function."""
def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Return a function that multiplies a float by a given multiplier."""
    return lambda x: x * multiplier
