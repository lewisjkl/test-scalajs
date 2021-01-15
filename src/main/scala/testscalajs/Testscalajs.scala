package testscalajs

import outwatch._
import outwatch.dsl._

import cats.effect.IO

object Testscalajs {

  def main(args: Array[String]): Unit = {

    OutWatch.renderInto[IO]("#app", h1("Hello World", cls := "text-red-800 text-9xl")).unsafeRunSync()
  }
}
