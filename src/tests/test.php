<?php
use PHPUnit\Framework\TestCase;

class ExampleTest extends TestCase
{
    public function testAddition()
    {
        $this->assertEquals(4, 2 + 2);
    }

    public function testStringContains()
    {
        $this->assertStringContainsString('Hello', 'Hello World');
    }
}
