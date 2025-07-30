#!/usr/bin/env python3
from typing import Iterable, Sequence, List, Tuple
"""Module that defines a type-annotated function to add two floats."""


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Adds two float numbers and returns their sum as a float."""
    return [(i, len(i)) for i in lst]
